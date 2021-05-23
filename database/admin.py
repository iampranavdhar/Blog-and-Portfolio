from django.contrib import admin
from database.models import Post,Project
from django_summernote.admin import SummernoteModelAdmin

class PostAdmin(SummernoteModelAdmin):
    summernote_fields = '__all__'

# Register your models here.
admin.site.register(Post,PostAdmin)
admin.site.register(Project)