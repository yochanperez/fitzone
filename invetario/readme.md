REGLAS DE NEGOCIO 1.
 Una Categoría agrupa múltiples Productos.
  No se puede eliminar una Categoría que tenga productos activos. 
  2. Código de Categoría único. Código SKU del Producto único en el sistema. 
  3. Cada Producto tiene: SKU, nombre, descripción, precio unitario, stock disponible, categoría y estado activo. 
  4. Solo staff puede crear, editar y eliminar. GET público en Productos.
   5. Productos: filtrar por categoría, estado activo y rango de precio; buscar por SKU o nombre; ordenar por precio o stock. 
   EJERCICIO 1 — CRUD    
    Categoría → Producto · ModelViewSet · 
    IsAdminOrReadOnly Implementa modelos ORM, serializers, ViewSets y rutas para Categoría y Producto. El serializer de Categoría incluye total_productos_activos (conteo con activo=True, read-only). Aplica los permisos de las reglas de negocio. EJERCICIO 2 — FOR     POST /api/inventario/valoracion/ Recibe el arreglo productos[]. Con for recorre cada producto: determina el descuento según el stock disponible (tabla), calcula precio_final = precio_unitario − descuento y el valor_total_item = precio_final × stock, y acumula el gran total del inventario. Al salir devuelve resumen y detalle