import { FlatList, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 8,
      }}
      horizontal
    >
      <CategoryCard
        imageUrl="https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=sph"
        title="Offers"
      />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard
        imageUrl="https://alpina.com/media/mageplaza/blog/post/p/i/pizzas.jpg"
        title="Pizza"
      />
      <CategoryCard
        imageUrl="https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg"
        title="Burguer"
      />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Sushi" />
    </ScrollView>
  );
}
