from django.db import models

# Create your models here.
class Voters(models.Model):
    studentId = models.BigAutoField(primary_key=True)
    firstName = models.CharField(max_length=240)
    lastName = models.CharField(max_length=240)
    email = models.CharField(max_length=120)
    department = models.CharField(max_length=560)
    createdAt = models.DateField()

    def _str_(self):
        return self.studentsId