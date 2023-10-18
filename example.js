/**********************************
Filename: ComplexCode

This code implements a complex algorithm for finding the shortest path in a weighted graph using Dijkstra's algorithm. It also includes various helper functions for graph manipulation, such as adding and removing vertices and edges.

Author: John Smith
Date: 2021-05-25
**********************************/

class Graph {
  constructor() {
    this.vertices = [];
    this.edges = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = {};
  }

  removeVertex(vertex) {
    const index = this.vertices.indexOf(vertex);
    if (index !== -1) {
      this.vertices.splice(index, 1);
      delete this.edges[vertex];
      for (let v in this.edges) {
        if (this.edges[v].hasOwnProperty(vertex)) {
          delete this.edges[v][vertex];
        }
      }
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.edges[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.edges[vertex2]) {
      this.addVertex(vertex2);
    }
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
  }

  removeEdge(vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2]) {
      delete this.edges[vertex1][vertex2];
    }
    if (this.edges[vertex2] && this.edges[vertex2][vertex1]) {
      delete this.edges[vertex2][vertex1];
    }
  }

  dijkstra(startVertex) {
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue();

    for (let vertex of this.vertices) {
      if (vertex === startVertex) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (!queue.isEmpty()) {
      const currentVertex = queue.dequeue().element;

      for (let neighbor in this.edges[currentVertex]) {
        const weight = this.edges[currentVertex][neighbor];
        const distance = distances[currentVertex] + weight;

        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previous[neighbor] = currentVertex;
          queue.changePriority(neighbor, distance);
        }
      }
    }

    return { distances, previous };
  }
}

class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    const node = { element, priority };
    let added = false;

    for (let i = 0; i < this.elements.length; i++) { // Find the right position based on priority
      if (node.priority < this.elements[i].priority) {
        this.elements.splice(i, 0, node);
        added = true;
        break;
      }
    }

    if (!added) {
      this.elements.push(node);
    }
  }

  dequeue() {
    return this.elements.shift();
  }

  changePriority(element, newPriority) {
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i].element === element) {
        this.elements[i].priority = newPriority;
        break;
      }
    }
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

// Usage example:

const graph = new Graph();
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 3);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "E", 1);
graph.addEdge("D", "E", 5);

const startVertex = "A";
const { distances, previous } = graph.dijkstra(startVertex);
console.log(`Shortest distances from vertex ${startVertex}:`, distances);
console.log("Previous vertices in shortest paths:", previous);