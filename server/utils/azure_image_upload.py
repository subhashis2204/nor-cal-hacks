from azure.storage.blob import BlobServiceClient
from uuid import uuid4


class UploadImages:
    def __init__(self, connection_string, container_name):
        self.blob_service_client = BlobServiceClient.from_connection_string(
            connection_string)
        self.container_client = self.blob_service_client.get_container_client(
            container_name)

    def upload_images(self, images):
        imageurls = []

        for image in images:
            filename = image.filename + str(uuid4())
            blob_client = self.container_client.get_blob_client(filename)
            blob_client.upload_blob(image)
            imageurls.append(blob_client.url)

        return imageurls
