import tweepy
import mapbox

access_token = "373132640-4AJkR2Ic1LVQJaelOja93hMV6SVFLEVl7NK26aDe"
access_token_secret = "PtkLPGlviXQLH8le1QkbkAPg6N3W621zgJA99a7JWE9UY"
consumer_key = "o3YGAI1eYrgPsaU3KVxjs4utX"
consumer_secret = "zTzF4ofNFnYtR80WDj65RDCIkWR49ePMEF2XRLqfUwjPXOiLV1"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

user = api.get_user('lamujerquixote')
location = user.location

#print location

mapbox_token = "pk.eyJ1IjoibGFtdWplcnF1aXhvdGUiLCJhIjoiRXNtU2loUSJ9.l6qgPI_jPX6uGbfGPm6u8w"
geocoder = mapbox.Geocoder(access_token=mapbox_token)

response = geocoder.forward(location)
print response.json()