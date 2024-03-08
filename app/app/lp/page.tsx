'use client'

import "@aws-amplify/ui-react/styles.css";
import DisplayPlan from "@/app/ui/app/display-plan";
//import QuestionsForm from "@/app/ui/app/questions-form";
export default function Page() {
    return (
        <div>
            <p>Welcome!</p>
            <DisplayPlan />
        </div>
    
    );
}