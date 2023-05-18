from sqlalchemy.orm import Session
import models
import schemas


def get_items(db: Session):
    return db.query(models.Items).all()

def get_item(db: Session, item_id: int):
    return db.query(models.Items).filter(models.Items.id == item_id).first()

def create_item(db: Session, item: schemas.ItemCreate):
    db_item = models.Items(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def delete_item(db: Session, item_id: int):
    db_item = db.query(models.Items).filter(models.Items.id == item_id).first()
    db.delete(db_item)
    db.commit()
    return db_item

def update_item(db: Session, item_id: int, item: schemas.ItemBase):
    db_item = db.query(models.Items).filter(models.Items.id == item_id)
    db_updated = db_item.first()
    update_data = item.dict(exclude_unset=True)
    db_item.filter(models.Items.id == item_id).update(update_data, synchronize_session=False)
    db.commit()
    db.refresh(db_updated)
    return db_updated