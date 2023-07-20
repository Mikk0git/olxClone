migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k85xy5rh45fykcz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "15yna6ek",
    "name": "picture",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k85xy5rh45fykcz")

  // remove
  collection.schema.removeField("15yna6ek")

  return dao.saveCollection(collection)
})
