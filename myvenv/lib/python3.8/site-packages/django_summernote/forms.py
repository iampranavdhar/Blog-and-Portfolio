from django import forms
from django_summernote.utils import get_attachment_model
try:
    from PIL import Image
    FIELD = forms.ImageField
except ImportError:
    FIELD = forms.FileField


class UploadForm(forms.Form):
    file = FIELD(required=True)


class AttachmentAdminForm(forms.ModelForm):
    file = FIELD(required=True)

    class Meta:
        model = get_attachment_model()
        fields = '__all__'
