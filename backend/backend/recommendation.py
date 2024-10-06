import sys
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd

# Sample movie data
movies = pd.DataFrame({
    'title': ['Inception', 'Interstellar', 'The Matrix', 'The Social Network', 'Avengers'],
    'genre': ['Sci-Fi', 'Sci-Fi', 'Sci-Fi', 'Drama', 'Action']
})

def get_recommendations(preferences):
    # Vectorize the movie genres and the user's preferences
    vectorizer = TfidfVectorizer()
    vectors = vectorizer.fit_transform(movies['genre'].tolist() + [preferences])
    
    # Compute similarity between the user's preferences and the movie genres
    similarity_matrix = cosine_similarity(vectors[-1], vectors[:-1])
    similar_movies = similarity_matrix.flatten().argsort()[-5:][::-1]
    
    return movies['title'].iloc[similar_movies].tolist()

if __name__ == '__main__':
    preferences = sys.argv[1]
    recommendations = get_recommendations(preferences)
    print(json.dumps(recommendations))

