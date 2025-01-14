# Generated by Django 4.0.3 on 2024-02-06 21:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='technician',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointments', to='service_rest.technician'),
        ),
        migrations.AlterField(
            model_name='technician',
            name='employee_id',
            field=models.PositiveSmallIntegerField(null=True, unique=True),
        ),
    ]
