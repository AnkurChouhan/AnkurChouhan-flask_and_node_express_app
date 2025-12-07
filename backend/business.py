import os

def get_data():
    file_path = os.path.join(os.path.dirname(__file__), 'names.txt')
    try:
        with open(file_path, 'r') as f:
            names = f.read().splitlines()
        return names
    except FileNotFoundError:
        return []
