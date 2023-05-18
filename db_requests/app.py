from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

import crud
import models
import schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

    
@app.get("/api/items", response_model=list[schemas.Item])
def read_items(db: Session = Depends(get_db)):
    items = crud.get_items(db)
    if items is None:
        raise HTTPException(status_code=500, detail="Internal Server Error")
    return items

@app.get("/api/items/{item_id}", response_model=schemas.Item)
def read_item(item_id: int, db: Session = Depends(get_db)):
    db_item = crud.get_item(db, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item


@app.post("/api/items", response_model=schemas.Item)
def create_item(
    item: schemas.ItemCreate, db: Session = Depends(get_db)
):
    return crud.create_item(db=db, item=item)

@app.delete("/api/items/{item_id}", response_model=schemas.Item)
def delete_item(
    item_id: int, db: Session = Depends(get_db)
):
    db_item = crud.delete_item(db=db, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item was not deleted successfully")
    return db_item

@app.put("/api/items/{item_id}", response_model=schemas.Item)
def update_item(
    item_id: int, item: schemas.ItemBase, db: Session = Depends(get_db)
):
    db_item = crud.update_item(db=db, item_id=item_id, item=item)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item was not updated successfully")
    return db_item

