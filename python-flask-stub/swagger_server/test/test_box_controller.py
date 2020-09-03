# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.api_response import ApiResponse  # noqa: E501
from swagger_server.models.box import Box  # noqa: E501
from swagger_server.models.box_status import BoxStatus  # noqa: E501
from swagger_server.test import BaseTestCase


class TestBoxController(BaseTestCase):
    """BoxController integration test stubs"""

    def test_add_box(self):
        """Test case for add_box

        Add a new box to the shipment
        """
        body = Box()
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/box',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_box(self):
        """Test case for delete_box

        Deletes a box
        """
        headers = [('api_key', 'api_key_example')]
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/box/{boxId}'.format(box_id=789),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_find_boxes_by_status(self):
        """Test case for find_boxes_by_status

        Finds Boxes by status
        """
        query_string = [('status', BoxStatus())]
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/box/findByStatus',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_find_boxes_by_tags(self):
        """Test case for find_boxes_by_tags

        Finds Boxes by tags
        """
        query_string = [('tags', 'tags_example')]
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/box/findByTags',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_box_by_id(self):
        """Test case for get_box_by_id

        Find box by ID
        """
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/box/{boxId}'.format(box_id='box_id_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_inventory_by_box_status(self):
        """Test case for get_inventory_by_box_status

        Returns box inventories by status
        """
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/box/inventory',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_box(self):
        """Test case for update_box

        Update an existing box
        """
        body = Box()
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/box',
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_box_with_form(self):
        """Test case for update_box_with_form

        Updates a box in the org with form data
        """
        data = dict(status='status_example',
                    notes='notes_example',
                    user_id='user_id_example',
                    location='location_example',
                    tags='tags_example')
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/box/{boxId}'.format(box_id='box_id_example'),
            method='POST',
            data=data,
            content_type='application/x-www-form-urlencoded')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_upload_file(self):
        """Test case for upload_file

        uploads an image
        """
        body = Object()
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/box/{boxId}/uploadImage'.format(box_id=789),
            method='POST',
            data=json.dumps(body),
            content_type='application/octet-stream')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
