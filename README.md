# CarCar

Team:

Person 1 - Murray Milton - Service
Person 2 - Justin Leopard - Sales

## Design

CarCar is an application designed for the management of automobile dealerships. At its core are three pivotal microservices: Inventory, Service Center, and Sales Center. The integrated microservices deliver a comprehensive and efficient platform that empowers automotive businesses to thrive in the digital age.

- Front-end: We leverage the power of React, a leading JavaScript library, to create a modern and user-friendly interface that enhances user engagement and satisfaction.

- Back-end: CarCar is built on Django, a high-performance Python web framework, ensuring a secure, scalable, and efficient server-side architecture.

- Database: We rely on PostgreSQL, a trusted and robust relational database management system, to store and manage vast amounts of data, ensuring data integrity and reliability.

## Service microservice

## Capabilities:

- View Appointments: You can view a list of service appointments and check the VIP status of vehicles.
- Service Appointment History: You can access the service appointment history of a vehicle by searching using its unique VIN number.
- Create Appointments: Easily create a new service appointment by providing essential details like VIN, appointment date and time, technician selection, and a specific reason for the service.
- Create Technicians: Add technicians to your service center by providing their names and employee numbers.

## Models:

- AutomobileVo Model: This model fetches automobile data from the Inventory API and includes information about VIN.
- Technician Model: It represents technicians and includes their name and employee_number information.
- Appointment Model: This model represents service appointments and includes details such as customer, VIN, technician, date/time, VIP status, reason, and appointment status (finished or not).

The Service microservice ensures that every aspect of the automobile servicing is managed with precision and care. It allows technicians to manage services ranging from appointment scheduling, track maintenance of automobile inventory within our fleet, and keep customer service at the forefront of our organization.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
