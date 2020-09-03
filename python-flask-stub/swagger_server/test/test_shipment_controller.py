# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.shipment import Shipment  # noqa: E501
from swagger_server.test import BaseTestCase


class TestShipmentController(BaseTestCase):
    """ShipmentController integration test stubs"""

    def test_get_inventory_by_shipment(self):
        """Test case for get_inventory_by_shipment

        Returns box inventories by shipment
        """
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/shipment/inventory',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_shipment_by_id(self):
        """Test case for get_shipment_by_id

        Find Shipment by ID
        """
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/shipment/{shipmentId}'.format(shipment_id='shipment_id_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
