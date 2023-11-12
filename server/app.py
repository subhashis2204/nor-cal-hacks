import os
import codecs
from flask import Flask, request
from dotenv import load_dotenv
from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient
from utils.azure_image_upload import UploadImages
from utils.azure_blob_utils import ComputerVisionProcessor
from utils.azure_openai import FlashCardGenerator
from flask_cors import CORS

load_dotenv()

app = Flask(__name__) 
CORS(app)

connection_string = os.environ['AZURE_STORAGE_CONNECTION_STRING']
container_name = 'allinone'

key = os.environ['VISION_KEY']
endpoint = os.environ['VISION_ENDPOINT']

gpt_key = os.environ['AZURE_OPENAI_KEY']
gpt_endpoint = os.environ['AZURE_OPENAI_ENDPOINT']
gpt_deployment_name = os.environ['AZURE_OPENAI_DEPLOYMENT_NAME']


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/images', methods=['POST'])
def images():
    files = request.files.getlist('files')
    imageurls = UploadImages(connection_string, container_name).upload_images(
        files)

    visionClient = ComputerVisionProcessor(key, endpoint)

    lines = []
    for url in imageurls:
        visionClient.read_file_remote(url,   lines)

    with codecs.open('output.txt', 'w', encoding='utf-8', errors='ignore') as f:
        f.writelines(lines)

    flashcards = FlashCardGenerator(
        gpt_key, gpt_endpoint, gpt_deployment_name).generate_flashcards()

    return {'content': flashcards}


if __name__ == '__main__':
    app.run(debug=True)
