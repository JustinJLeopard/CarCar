from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse, HttpResponseNotFound
from common.json import ModelEncoder
from .models import AutomobileVO, Appointment, Technician

# Create your views here.
