/*
   File: complex-javascript-code.js

   Description: This code demonstrates a complex implementation of a job scheduling system.
                It includes various classes and functions to manage jobs, prioritize tasks,
                and track job status. The code is highly modular and follows best practices
                for scalability and maintainability.

   Author: John Doe
   Date: 2022-01-01
*/

// Define the Job class
class Job {
   constructor(id, name, priority, status) {
      this.id = id;
      this.name = name;
      this.priority = priority;
      this.status = status;
   }

   toString() {
      return `Job#${this.id}: ${this.name} [${this.priority}] (${this.status})`;
   }
}

// Define the Scheduler class
class Scheduler {
   constructor() {
      this.jobs = [];
   }

   addJob(job) {
      this.jobs.push(job);
   }

   getJobById(id) {
      return this.jobs.find(job => job.id === id);
   }

   sortByPriority() {
      this.jobs.sort((a, b) => {
         return a.priority - b.priority;
      });
   }

   run() {
      while (this.jobs.length > 0) {
         const job = this.jobs.shift();
         job.status = 'running';
         console.log(`Running ${job}`);

         // Simulating a long-running job
         setTimeout(() => {
            job.status = 'completed';
            console.log(`Completed ${job}`);
         }, 2000);
      }
   }
}

// Create an instance of Scheduler
const scheduler = new Scheduler();

// Add jobs to the scheduler
scheduler.addJob(new Job(1, 'Job A', 2, 'pending'));
scheduler.addJob(new Job(2, 'Job B', 1, 'pending'));
scheduler.addJob(new Job(3, 'Job C', 3, 'pending'));

// Sort jobs by priority
scheduler.sortByPriority();

// Run the scheduler
scheduler.run();