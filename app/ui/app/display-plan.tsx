"use-client"
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();

export default function DisplayPlan() {

    const [myLearninPlan, setMyLearningPlan] = useState<Schema["LearningPlan"][]>([]);

    async function getMyLearningPlan() {
        const {data} = await client.models.LearningPlan.list();
        setMyLearningPlan(data);
    }

    useEffect(() => {
        getMyLearningPlan();
      }, []);

      return (
        <div>
          <ul>
            {myLearninPlan.map((learningPlan) => (
              <li key={learningPlan.id}>{learningPlan.plan}</li>
            ))}
          </ul>
        </div>
      ); 

}