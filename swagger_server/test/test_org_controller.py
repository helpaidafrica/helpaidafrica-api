# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.org import Org  # noqa: E501
from swagger_server.test import BaseTestCase


class TestOrgController(BaseTestCase):
    """OrgController integration test stubs"""

    def test_get_inventory_by_org(self):
        """Test case for get_inventory_by_org

        Returns box inventories by org
        """
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/org/inventory',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_org_by_id(self):
        """Test case for get_org_by_id

        Find Org by ID
        """
        response = self.client.open(
            '/bilgrami/helpaidafrica/1.0.0/org/{orgId}'.format(org_id='org_id_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
