from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel

class User(BaseModel):
    id: int
    name: str = 'John Doe'
    signup_ts: Optional[datetime] = None
    friends: List[int] = []

    # def __init__(self, **data):
    #     self.id = data['id']
    #     self.name = data.get('name', 'John Doe')
    #     self.signup_ts = data['signup_ts']
    #     self.friends = data['friends']

external_data = {
    "id": 123,
    "signup_ts": "2019-06-01 12:22",
    "friends": [1, 2, '3'],
}

external_data['id'] = 888

user = User(**external_data)

print(external_data.get('id'))

print(user.id)