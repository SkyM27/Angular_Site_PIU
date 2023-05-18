from time import sleep
import requests
import random
import json

item_names = ["Pencils", "Pens", "Highlighters", "Markers", "Notebooks", "Binders", "Paper clips", "Sticky notes", "Envelopes", "File folders", "Tape", "Staplers", "Staples", "Whiteboard markers", "Erasers", "Correction fluid", "Glue sticks", "Scissors", "Rulers", "Calculators", "USB drives", "Headphones", "Mouse pads", "Power cords", "Phone chargers", "Batteries", "Ink cartridges", "Toner cartridges", "Cleaning supplies", "Safety equipment", "First-aid kits", "Toolkits", "Hardware items", "Software licenses", "Furniture", "Decorations", "Plants", "Snacks", "Beverages", "Cleaning services", "Repair services", "Training courses", "Marketing materials", "Promotional items", "Apparel", "Office equipment", "Printers", "Copiers", "Scanners", "Projectors"]

inventory = []

for item_name in item_names:
    inventory.append({"name": item_name, "number": random.randint(1, 100), "category": item_name.lower()})

for i in inventory:
    resp = requests.post('http://localhost:8000/items', data=json.dumps(i))
    if resp.status_code == 200:
        print("Success!")
    else:
        print("Error!")
    sleep(1)

