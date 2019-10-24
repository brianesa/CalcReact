// import React from 'react'
// import { AppRegistry } from 'react-native'
// import Todo from './app/Todo'
import TodoList from './TodoList'
import { View, ScrollView, StyleSheet, AppRegistry } from 'react-native'
import React, { Component } from 'react'

import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import TabBar from './TabBar'
// const TodoApp = () => <Todo />
// AppRegistry.registerComponent('TodoApp', () => TodoApp)

// Creating the App component (app/App.js)
let todoIndex = 0
class Todo extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: '', todos: [],
            type: 'All'
        }
        this.toggleComplete = this.toggleComplete.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
        this.setType = this.setType.bind(this)
    }
    setType(type) {
        this.setState({ type })
    }
    deleteTodo(todoIndex) {
        let { todos } = this.state
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
        this.setState({ todos })
    }
    toggleComplete(todoIndex) {
        let todos = this.state.todos
        todos.forEach((todo) => {
            if (todo.todoIndex === todoIndex) {
                todo.complete = !todo.complete
            }
        })
        this.setState({ todos })
    }
    inputChange(inputValue) {
        console.log('Input Value: ', inputValue)
    }
    submitTodo() {

    }

    render() {
        // let { inputValue } = this.state
        const { todos, inputValue, type } = this.state 
        return (    
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Heading />
                    <Input inputValue={inputValue} inputChange={(text) => this.inputChange(text)} />
                    <TodoList toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} todos={todos} />
                    <Button submitTodo={this.submitTodo} />
                </ScrollView>
                <TabBar type={type} setType={this.setType} />
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1, paddingTop: 60
    }
})
export default Todo
