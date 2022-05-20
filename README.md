# Foodly-doodly-api
This is the API for my foodly doodly application.

Behind the scenes, the server is fetching data from [spoonacular APi](https://spoonacular.com/food-api), then making it available to the application.

### RECIPES ENDPOINT

```
https://gentle-river-67706.herokuapp.com/
```

**The response from the server**:

```json
{
    "results": [
        {
            "id": 716627,
            "title": "Easy Homemade Rice and Beans",
            "readyInMinutes": 35,
            "servings": 2,
            "sourceUrl": "http://cooking2perfection.blogspot.com/2012/11/easy-homemade-rice-and-beans.html",
            "openLicense": 2,
            "image": "easy-homemade-rice-and-beans-716627.jpg"
        }
    ],
    "baseUri": "https://spoonacular.com/recipeImages/",
    "offset": 0,
    "number": 1,
    "totalResults": 5222,
    "processingTimeMs": 112,
    "expires": 1653061769091,
    "isStale": false
}
```

You can pass in the following parameters to the url:
- number
- query
- cuisine
- diet

Here are a few examples:

```
https://gentle-river-67706.herokuapp.com/number=30
```

```
https://gentle-river-67706.herokuapp.com/number=30&query=pasta
```

```
https://gentle-river-67706.herokuapp.com/?cuisine=italian
```
#### RECIPES BY INGREDIENTS ENDPOINT
You need to pass in either a single ingredient or a list of ingredients. This parameter **is NOT optional**. If an ingredient is not passed in,the server will throw an error. Here is an example of how to query the endpoint
```
https://gentle-river-67706.herokuapp.com/ingredients/?ingredients=apple&number=1
```
**The response from the server**:

```json
[
    {
        "id": 633547,
        "title": "Baked Cinnamon Apple Slices",
        "image": "https://spoonacular.com/recipeImages/633547-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
            {
                "id": 2010,
                "amount": 1.5,
                "unit": "tablespoons",
                "unitLong": "tablespoons",
                "unitShort": "Tbsp",
                "aisle": "Spices and Seasonings",
                "name": "cinnamon",
                "original": "1 1/2 tablespoons of Cinnamon",
                "originalName": "Cinnamon",
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
            },
            {
                "id": 9299,
                "amount": 0.5,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Dried Fruits;Produce;Baking",
                "name": "raisins",
                "original": "1/2 cup of Raisins",
                "originalName": "Raisins",
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/raisins.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 9003,
                "amount": 4.0,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Produce",
                "name": "apples",
                "original": "4 Apples Sliced and Peeled – whatever type of apples I have in my refrigerator",
                "originalName": "Apples Sliced and Peeled – whatever type of apples I have in my refrigerator",
                "meta": [
                    "peeled",
                    "sliced"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            }
        ],
        "unusedIngredients": [],
        "likes": 1
    }
]
```

You can pass in the following parameters to the url:
- ingredients (*You can either pass in a single ingredient, or a list of comma-separated ingredients*)
- number (*optional*)

Here are a few examples:

```
https://gentle-river-67706.herokuapp.com/ingedients/?ingredients=onion&number=30
```

```
https://gentle-river-67706.herokuapp.com/ingredients/number=30&ingredients=pineapple,+apple
```
