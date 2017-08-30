"""STATIC FILE SETTINGS"""
import datetime
from django.conf import settings
from config.secret import AWS

AWS_ACCESS_KEY_ID = AWS['key']
AWS_SECRET_ACCESS_KEY = AWS['secret']
AWS_FILE_EXPIRE = 200
AWS_PRELOAD_METADATA = True
AWS_QUERYSTRING_AUTH = True

DEFAULT_FILE_STORAGE = 'config.aws.utils.MediaRootS3BotoStorage'
STATICFILES_STORAGE = 'config.aws.utils.StaticRootS3BotoStorage'
AWS_STORAGE_BUCKET_NAME = 'ryu-portfolio'
S3DIRECT_REGION = 'us-west-2'
S3_URL = '//%s.s3.amazonaws.com/' % AWS_STORAGE_BUCKET_NAME
MEDIA_URL = '//%s.s3.amazonaws.com/media/' % AWS_STORAGE_BUCKET_NAME
MEDIA_ROOT = MEDIA_URL
STATIC_URL = S3_URL + 'static/'

AWS_PRELOAD_METADATA = True
ADMIN_MEDIA_PREFIX = STATIC_URL + 'admin/'
two_months = datetime.timedelta(days=61)
date_two_months_later = datetime.date.today() + two_months
expires = date_two_months_later.strftime("%A, %d %B %Y 20:00:00 GMT")
AWS_S3_FILE_OVERWRITE = True
AWS_HEADERS = {
  'Expires': expires,
  'Cache-Control': 'max-age=%d' % (int(two_months.total_seconds()), ),
}
