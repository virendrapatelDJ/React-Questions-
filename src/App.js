import React from 'react';
import './style.css';
import { UseEffectExample } from './hooks/UseEffectExample';
import { MemoExample } from './hooks/MemoExample';
import { StudentList } from './list/StudentList';
import { UseEffectSequence } from './hooks/UseEffectSequence';
import { SearchingEmployee } from './optimize/SearchingEmployee';
import { ReducerExample } from './hooks/ReducerExample';
import { ReduceRenders } from './hooks/ReduceRenders';
import { ClassComponent } from './ClassComponent';

export default function App() {
  return (
    <div>
      {/* <h1>Hello React 🤩</h1> */}
      {/* <UseEffectExample /> */}
      {/* <UseEffectSequence /> */}
      {/* <StudentList /> */}
      {/* <MemoExample /> */}
      {/* <SearchingEmployee /> */}
      {/* <ReducerExample /> */}
      {/* <ReduceRenders /> */}
      <ClassComponent name="virendra" key2="value" />
    </div>
  );
}
