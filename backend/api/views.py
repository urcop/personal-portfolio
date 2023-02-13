from rest_framework import generics

from .models import Reviews
from .serializers import ReviewsSerializer


class ReviewsList(generics.ListCreateAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer
