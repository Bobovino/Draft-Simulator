from riotwatcher import LolWatcher, ApiError
import pandas as pd

# global variables
api_key = 'RGAPI-12747149-84b5-443f-aaa6-ec00a8110ff8'
watcher = LolWatcher(api_key)
my_region = 'euw1'
summoner_name='rodrytaber3'

me = watcher.summoner.by_name(my_region, 'rodrytaber3')
print(me)