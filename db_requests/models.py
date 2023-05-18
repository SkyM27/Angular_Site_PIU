from sqlalchemy import Column, String, Integer
from database import Base

class Items(Base):
    __tablename__ = "Items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255))
    number = Column(Integer)
    category = Column(String(255))