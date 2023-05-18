from pydantic import BaseModel

class ItemBase(BaseModel):
    name: str
    number: int
    category: str


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int

    class Config:
        orm_mode = True