import json
import numpy as np

train_labels = np.load("train_labels.npy") #authors
train_data = np.load("train_data.npy")
test_data = np.load("test_data.npy")

size_train_set = len(train_data)
size_test_set = len(test_data)
num_words = len(train_data[0])

print("Loaded data.")

# print(len(train_labels))
# print(train_labels)
# print('\n')
# print(len(train_data))
# print(train_data)
# print('\n')
# print(len(test_data))
# print(test_data)

weights = np.random.rand(num_words)
for _ in range(size_test_set):
    for i, paper in enumerate(train_data):
        r = np.dot(paper, weights)
        if r > 0:
            guess = 1 #'Hamilton'
        else:   
            guess = 0 #'Madison'
        
        correct_author = train_labels[i]
        error = correct_author - guess
        weights[i] = weights[i] + np.dot(error, np.dot(weights[i], correct_author)) 

#print(weights)
print(np.round(weights, 4))
