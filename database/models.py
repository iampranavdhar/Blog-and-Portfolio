from django.conf import settings
from django.db import models
from django.utils import timezone

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    cover_image = models.ImageField(upload_to='post-photos/%Y/%m/%d',blank=True,null=True)
    category = models.CharField(max_length=200,blank=True,null=True)
    tags = models.CharField(max_length=200,blank=True,null=True)
    card_description = models.CharField(max_length=300, blank=False, default='somevalue')
    body = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Project(models.Model):
    repo_name = models.CharField(max_length=300,blank=True,null=True)
    image = models.ImageField(upload_to='projects-photos/%Y/%m/%d',blank=False)
    project_description = models.CharField(max_length=200)
    code_link= models.CharField(max_length=300)
    demo_link = models.CharField(max_length=300)

    def __str__(self):
        return self.repo_name

    #This def __str__(self) is for the admin purpose here the
    #repo name is taken as the title in the admin Projects else 
    #it will show as the project-1,project-2 like that which is
    #difficult to understand when we want to change it