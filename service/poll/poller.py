import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here. Ignore vs-code error hinting
# from service_rest.models import Something

from service_rest.models import AutomobileVO

API_INVENTORY = "http://project-beta-inventory-api-1:8000/api/automobiles/"

def poll():
    while True:
        print('Service poller polling for data')
        try:
            response = requests.get("http://project-beta-inventory-api-1:8000/api/automobiles/")

            content = json.loads(response.content)
            for auto in content["autos"]:
                AutomobileVO.objects.update_or_create(vin=auto["vin"])

            #Test for printing the Value Object within the poller
            test_automobile = AutomobileVO.objects.all()
            print(f"Automobile Fetched:{test_automobile}")
        except Exception as e:
            print(e, file=sys.stderr)

        time.sleep(6)


if __name__ == "__main__":
    poll()
