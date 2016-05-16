import tweepy

access_token = "373132640-4AJkR2Ic1LVQJaelOja93hMV6SVFLEVl7NK26aDe"
access_token_secret = "PtkLPGlviXQLH8le1QkbkAPg6N3W621zgJA99a7JWE9UY"
consumer_key = "o3YGAI1eYrgPsaU3KVxjs4utX"
consumer_secret = "zTzF4ofNFnYtR80WDj65RDCIkWR49ePMEF2XRLqfUwjPXOiLV1"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)


# Stream tweets
# How many words in tweet? Ignore hashtags. 
# Eliminate all tweets > 7 words. 
# How to handle words that are not words?
# How many syllables in tweet? Use NLP library. 

# Create haiku from first 5,7,5 tweets

# Example: 
# dog dog dog dog dog
# cat cat cat cat cat cat cat
# pig pig pig pig pig
# @a @b @c

# Do I have to credit them? It looks ugly. We'll see. 
