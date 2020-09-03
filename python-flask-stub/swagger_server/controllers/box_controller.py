import connexion
import six

from swagger_server.models.api_response import ApiResponse  # noqa: E501
from swagger_server.models.box import Box  # noqa: E501
from swagger_server.models.box_status import BoxStatus  # noqa: E501
from swagger_server import util


def add_box(body):  # noqa: E501
    """Add a new box to the shipment

     # noqa: E501

    :param body: Box object that needs to be added to the shipment
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Box.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_box(box_id, api_key=None):  # noqa: E501
    """Deletes a box

     # noqa: E501

    :param box_id: Box id to delete
    :type box_id: int
    :param api_key: 
    :type api_key: str

    :rtype: None
    """
    return 'do some magic!'


def find_boxes_by_status(status):  # noqa: E501
    """Finds Boxes by status

    Multiple status values can be provided with comma separated strings # noqa: E501

    :param status: Status values that need to be considered for filter
    :type status: dict | bytes

    :rtype: List[Box]
    """
    if connexion.request.is_json:
        status = .from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def find_boxes_by_tags(tags):  # noqa: E501
    """Finds Boxes by tags

    Muliple tags can be provided with comma separated strings. Use\\ \\ tag1, tag2, tag3 for testing. # noqa: E501

    :param tags: Tags to filter by
    :type tags: List[str]

    :rtype: List[Box]
    """
    return 'do some magic!'


def get_box_by_id(box_id):  # noqa: E501
    """Find box by ID

    Returns a single box # noqa: E501

    :param box_id: ID of box to return
    :type box_id: str

    :rtype: Box
    """
    return 'do some magic!'


def get_inventory_by_box_status():  # noqa: E501
    """Returns box inventories by status

    Returns a map of box status codes to quantities # noqa: E501


    :rtype: Dict[str, int]
    """
    return 'do some magic!'


def update_box(body):  # noqa: E501
    """Update an existing box

     # noqa: E501

    :param body: Box object that needs to be added to the shipment
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Box.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def update_box_with_form(box_id, status=None, notes=None, user_id=None, location=None, tags=None):  # noqa: E501
    """Updates a box in the org with form data

     # noqa: E501

    :param box_id: ID of box that needs to be updated
    :type box_id: str
    :param status: 
    :type status: str
    :param notes: 
    :type notes: str
    :param user_id: 
    :type user_id: str
    :param location: 
    :type location: str
    :param tags: 
    :type tags: List[str]

    :rtype: None
    """
    return 'do some magic!'


def upload_file(box_id, body=None):  # noqa: E501
    """uploads an image

     # noqa: E501

    :param box_id: ID of box to update
    :type box_id: int
    :param body: 
    :type body: dict | bytes

    :rtype: ApiResponse
    """
    if connexion.request.is_json:
        body = Object.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
