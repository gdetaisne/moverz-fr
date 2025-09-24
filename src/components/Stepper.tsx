import React from 'react';

export type Step = {
  icon?: React.ReactNode;
  title: string;
  text: string;
};

export function Stepper({ steps }: { steps: [Step, Step, Step] }) {
  return (
    <ol className="grid md:grid-cols-3 gap-6">
      {steps.map((s, idx) => (
        <li key={idx} className="card text-center">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-4 bg-gradient-to-br from-[var(--mz-navy)] to-[var(--mz-teal)] text-white grid place-items-center text-2xl">
            {s.icon || idx + 1}
          </div>
          <h3 className="h3 mb-1">{s.title}</h3>
          <p className="small">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
