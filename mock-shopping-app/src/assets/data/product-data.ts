import { Product } from "app/models/products";
const productsJSON: string = `[
	{
	 "createdAt": "2022-06-13T17:01:56.872Z",
	 "name": "Fantastic Plastic Salad",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "996.00",
	 "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
	 "id": "1"
	},
	{
	 "createdAt": "2022-06-14T03:40:28.712Z",
	 "name": "Unbranded Bronze Shirt",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "475.00",
	 "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
	 "id": "2"
	},
	{
	 "createdAt": "2022-06-13T11:50:38.958Z",
	 "name": "Modern Bronze Cheese",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "557.00",
	 "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
	 "id": "3"
	},
	{
	 "createdAt": "2022-06-13T19:47:14.986Z",
	 "name": "Rustic Fresh Fish",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "521.00",
	 "description": "The Football Is Good For Training And Recreational Purposes",
	 "id": "4"
	},
	{
	 "createdAt": "2022-06-14T01:17:34.220Z",
	 "name": "Recycled Plastic Gloves",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "66.00",
	 "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
	 "id": "5"
	},
	{
	 "createdAt": "2022-06-13T12:30:22.381Z",
	 "name": "Bespoke Soft Shoes",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "18.00",
	 "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
	 "id": "6"
	},
	{
	 "createdAt": "2022-06-13T11:42:46.828Z",
	 "name": "Awesome Concrete Pizza",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "364.00",
	 "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
	 "id": "7"
	},
	{
	 "createdAt": "2022-06-14T00:02:13.197Z",
	 "name": "Ergonomic Metal Chair",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "412.00",
	 "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
	 "id": "8"
	},
	{
	 "createdAt": "2022-06-13T13:37:13.595Z",
	 "name": "Oriental Metal Car",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "429.00",
	 "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
	 "id": "9"
	},
	{
	 "createdAt": "2022-06-13T15:09:01.049Z",
	 "name": "Incredible Fresh Hat",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "195.00",
	 "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
	 "id": "10"
	},
	{
	 "createdAt": "2022-06-14T08:49:14.731Z",
	 "name": "Bespoke Fresh Cheese",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "130.00",
	 "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
	 "id": "11"
	},
	{
	 "createdAt": "2022-06-13T12:03:58.343Z",
	 "name": "Bespoke Soft Shoes",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "648.00",
	 "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
	 "id": "12"
	},
	{
	 "createdAt": "2022-06-14T00:05:22.873Z",
	 "name": "Luxurious Wooden Pizza",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "739.00",
	 "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
	 "id": "13"
	},
	{
	 "createdAt": "2022-06-14T08:18:17.585Z",
	 "name": "Electronic Granite Table",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "97.00",
	 "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
	 "id": "14"
	},
	{
	 "createdAt": "2022-06-14T03:49:46.792Z",
	 "name": "Recycled Frozen Bacon",
	 "image": "http://loremflickr.com/640/480/food",
	 "price": "73.00",
	 "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
	 "id": "15"
	}
 ]`;
const products: Product[] = JSON.parse(productsJSON);
export default products;
