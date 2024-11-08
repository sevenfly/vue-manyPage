<template>
  <div class="main">home-page</div>
</template>
<script setup lang="ts" name="App">
// 引入 CryptoJS
import CryptoJS from 'crypto-js'

const key = CryptoJS.enc.Utf8.parse('1234567890abcdef') // 密钥长度必须为 16、24 或 32 字节
const plaintext = 'Hello, World!'

// 加密
const encrypted = CryptoJS.AES.encrypt(plaintext, key, {
  mode: CryptoJS.mode.ECB, // 加密模式
  padding: CryptoJS.pad.Pkcs7 // 填充方式
})

// 输出密文
console.log('密文:', encrypted.toString())

// 解密
const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
})

// 输出明文
console.log('明文:', decrypted.toString(CryptoJS.enc.Utf8))
</script>
<style></style>
