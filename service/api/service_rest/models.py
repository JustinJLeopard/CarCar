from django.db import models
from django.urls import reverse

# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=30, unique=True)
    sold = models.BooleanField(default=False)

class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.PositiveSmallIntegerField(null=True, unique=True)

    def get_api_url(self):
        return reverse("show_technician_details", kwargs={"pk": self.pk})

class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.TextField()
    status = models.CharField(max_length=50)
    vin = models.CharField(max_length=30, unique=True)
    customer = models.CharField(max_length=150, null=True)

    technician = models.ForeignKey(Technician, 
    related_name="appointments", 
    on_delete=models.CASCADE
    )


# Set VIP status for order of the request:
    def finish(self):
        self.status = "finished"
        self.save()

    def cancel(self):
        self.status = "canceled"
        self.save()


    def created(self):
        self.status = "created"
        self.save()
    


    def __str__(self):
        return self.title