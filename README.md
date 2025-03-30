# 介绍

实现一个简单的插件,实现对文本的转发

## 特性

### 将选中的文本转换为JSON格式字符串

## Release Notes

### 1.0.0

初始版本

## 开发说明

1. 安装说明   
```
npm install -g yo generator-code
yo code
npm install -g vsce
```
2. 修改配置  
注意要将package.json中的engines配置修改低于当前vscode的运行版本，否则会出现无法调试等问题
"engines": {  
        "vscode": "^1.96.0"  
}  
将  
devDependencies": {  
    "@types/vscode": "^1.96.0",  
}  
修改完成后需要重新运行  
npm install  
3. 运行插件  

4. 打包插件  
vsce package  
