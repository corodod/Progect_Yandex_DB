def to_json_array(rows) -> str:
  json = '['
  
  for entity in rows:
    json += str(entity) + ', '
  
  if(json != '['):
    json = json[:-2]
  json += ']'
  return json