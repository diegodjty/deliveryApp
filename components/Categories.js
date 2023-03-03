import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* CategorieCard */}
      <CategoryCard
        title="testing 1"
        imgUrl="https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/47a75f43-40d7-4012-a3fa-e8ff66407ff4-retina-large.jpg"
      />
      <CategoryCard
        title="testing 2"
        imgUrl="https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/47a75f43-40d7-4012-a3fa-e8ff66407ff4-retina-large.jpg"
      />
      <CategoryCard
        title="testing 3"
        imgUrl="https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/47a75f43-40d7-4012-a3fa-e8ff66407ff4-retina-large.jpg"
      />
      <CategoryCard
        title="testing 3"
        imgUrl="https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/47a75f43-40d7-4012-a3fa-e8ff66407ff4-retina-large.jpg"
      />
      <CategoryCard
        title="testing 3"
        imgUrl="https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photosV2/47a75f43-40d7-4012-a3fa-e8ff66407ff4-retina-large.jpg"
      />
    </ScrollView>
  );
};

export default Categories;
