import connexion
import six

from swagger_server.models.org import Org  # noqa: E501
from swagger_server import util


def get_inventory_by_org():  # noqa: E501
    """Returns box inventories by org

    Returns a map of org names to quantities # noqa: E501


    :rtype: Dict[str, int]
    """
    return 'do some magic!'


def get_org_by_id(org_id):  # noqa: E501
    """Find Org by ID

    Returns a single Org # noqa: E501

    :param org_id: ID of Org to return
    :type org_id: str

    :rtype: Org
    """
    return 'do some magic!'
