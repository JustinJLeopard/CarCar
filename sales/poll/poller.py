# import django
# import os
# import sys
# import time
# import json
# import requests

# sys.path.append("")
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
# django.setup()

# from sales_rest.models import AutomobileVO, Salesperson, Customer, Sale


# def poll():
#     while True:
#         print('Sales poller polling for data')
#         try:
#             url = "http://project-beta-inventory-api-1:8000/api/automobiles/"
#             response = requests.get(url)

#             if response.status_code == 200:
#                 sales_data = response.json()

#                 for item in sales_data:
#                     automobile_data = item.get("automobile")
#                     automobile, _ = AutomobileVO.objects.get_or_create(vin=automobile_data["vin"], defaults={'sold': automobile_data.get("sold", False)})

#                     salesperson_data = item.get("salesperson")
#                     salesperson, _ = Salesperson.objects.get_or_create(
#                         first_name=salesperson_data["first_name"],
#                         last_name=salesperson_data["last_name"],
#                         defaults={'employee_id': salesperson_data.get("employee_id")}
#                     )

#                     customer_data = item.get("customer")
#                     customer, _ = Customer.objects.get_or_create(
#                         first_name=customer_data["first_name"],
#                         last_name=customer_data["last_name"],
#                         defaults={
#                             'address': customer_data.get("address"),
#                             'phone_number': customer_data.get("phone_number")
#                         }
#                     )

#                     sale, created = Sale.objects.update_or_create(
#                         automobile=automobile,
#                         salesperson=salesperson,
#                         customer=customer,
#                         defaults={'price': item.get("price")}
#                     )
#                     print(f"{'Created' if created else 'Updated'} sale {sale}")
#             else:
#                 print(f"Failed to fetch sales data. Status code: {response.status_code}", file=sys.stderr)
#         except Exception as e:
#             print(e, file=sys.stderr)

#         time.sleep(60)


# if __name__ == "__main__":
#     poll()
import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from service_rest, here. Ignore vs-code error hinting
# from service_rest.models import Something

from sales_rest.models import AutomobileVO

API_INVENTORY = "http://project-beta-inventory-api-1:8000/api/automobiles/"

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            response = response.get("http://project-beta-inventory-api-1:8000/api/automobiles/")
            content = json.loads(response.content)
            for auto in content["autos"]:
                AutomobileVO.objects.update_or_create(vin=auto["vin"])

            #Test for printing the Value Object within the poller
            test_automobile = AutomobileVO.objects.all()
            print(f"Automobile Fetched:{test_automobile}")
        except Exception as e:
            print(e, file=sys.stderr)

        time.sleep(60)


if __name__ == "__main__":
    poll()
