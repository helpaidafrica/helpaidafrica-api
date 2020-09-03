import connexion
import six

from swagger_server.models.shipment import Shipment  # noqa: E501
from swagger_server import util


def get_inventory_by_shipment():  # noqa: E501
    """Returns box inventories by shipment

    Returns a map of shipments to quantities # noqa: E501


    :rtype: Dict[str, int]
    """
    return 'do some magic!'


def get_shipment_by_id(shipment_id):  # noqa: E501
    """Find Shipment by ID

    Info about a single Shipment # noqa: E501

    :param shipment_id: ID of Shipment
    :type shipment_id: str

    :rtype: Shipment
    """
    return 'do some magic!'
