import axios from 'axios'

import { createPinia } from 'pinia'
import { useUserStore } from '@/stores/user'
const pinia = createPinia();
const userStore = useUserStore(pinia);

// 创建 axios 实例
const api = axios.create({
  baseURL: '/api',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer app-2vWsFF8PM5gJjxnHe5zVGqB1'
  }
})

// 添加请求拦截器
api.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// 添加错误处理
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('API Error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      console.error('Network Error:', error.request);
      return Promise.reject(new Error('网络错误，请检查网络连接'));
    } else {
      console.error('Request Error:', error.message);
      return Promise.reject(error);
    }
  }
)

const userId = userStore.getUserId

export const chatAPI = {
  // 发送消息 创建 有conversation_id继续，无创建
  sendMessage(params) {
    return fetch("/chat/chat-messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3ZDg4ZWYzMC0zZGQwLTRhMTgtYjUzOS03MjY2M2IxMTdjMjAiLCJzdWIiOiJXZWIgQVBJIFBhc3Nwb3J0IiwiYXBwX2lkIjoiN2Q4OGVmMzAtM2RkMC00YTE4LWI1MzktNzI2NjNiMTE3YzIwIiwiYXBwX2NvZGUiOiJBSmdVUDBVY2tDMU9CZ1J1IiwiZW5kX3VzZXJfaWQiOiI4MjcyZjQzNy0yNzIwLTQxYWItYTQ4Yi0xNGY5MDIwMmExMTQifQ.M58DdM2IH1c0emaXzEf-RSIijsOghfAMt3gFoPE2vMw'
        },
        body: JSON.stringify({
          inputs: {},
          query: params.query,
          response_mode: "streaming",
          conversation_id: params.conversation_id || "",
          user: params.user || userId,
          files: params.files || []
        }),
    });
  },

  // 创建新对话
  createConversation(mode = 'general') {
    return api.get(`/conversations`, {
      params: {
        user:userId,
        last_id:"",
        limit:20
      }
    })
  },

  // 获取对话历史
  getConversationHistory(conversationId) {
    return api.get(`/conversations/${conversationId}/messages`)
  },

  // 获取所有对话
  getConversations() {
    return api.get('/conversations', {
      params: {
        user: userId,
        last_id: "",
        limit: 20
      }
    })
  },

  // 删除对话
  delConversations(id) {
    return api.delete('/conversations/' + id, {
      data: {
        user: userId,
      }
    })
  },

  // 获取应用基本信息
  getAppInfo() {
    return api.get('/info', {
    })
  },

  // 获取应用参数
  getAppParameters() {
    return api.get('/parameters', {
    })
  },

  // 获取应用信息
  getAppMeta() {
    return api.get('/meta', {
    })
  },

  // 文字转语音
  textToAudio(messageId, text) {
    return api.post('/text-to-audio', {
      message_id: messageId,
      text: text,
      user: userId // 使用实际的用户ID
    }, {
      responseType: 'blob' // 处理音频文件的响应
    });
  },

  // 上传文件
  uploadFile(file, user) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user', user);

    return api.post('/files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  // 停止响应
  stopResponse(taskId) {
    return api.post(`/chat-messages/${taskId}/stop`, {
      user: userId // 使用实际的用户ID
    });
  },

  // 获取下一轮问题列表
  getSuggestedQuestions(messageId) {
    return api.get(`/messages/${messageId}/suggested`, {
    });
  }
} 