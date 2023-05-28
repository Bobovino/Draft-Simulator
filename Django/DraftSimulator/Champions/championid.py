""" from riotwatcher import LolWatcher as watcher, ApiError
import pandas as pd
from .summonerinfo import *

# check league's latest version
latest = watcher.data_dragon.versions_for_region(my_region)['n']['champion']
# Lets get some champions static information
static_champ_list = watcher.data_dragon.champions(latest, False, 'en_US')

# champ static list data to dict for looking up
champ_dict = {}
for key in static_champ_list['data']:
    row = static_champ_list['data'][key]
    champ_dict[row['key']] = row['id']
for row in participants:
    print(str(row['champion']) + ' ' + champ_dict[str(row['champion'])])
    row['championName'] = champ_dict[str(row['champion'])]

# print dataframe
df = pd.DataFrame(participants)
df """

import requests
import time

champions = []
url = 'https://riot-api-endpoint/champions'
requests_count = 0

for i in range(200):  # if you want to make 1000 requests for example
    response = requests.get(url)
    champion_data = response.json()
    champions.extend(champion_data)
    requests_count += 1

    if requests_count >= 100:
        # If we've made 100 requests, delay for 2 minutes
        time.sleep(120)
        requests_count = 0  # Reset the count
    else:
        # Otherwise, delay for 1/20 seconds
        time.sleep(0.05)
