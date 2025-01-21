import socket
socket = socket.socket()

socket.bind(('127.0.0.1', 1234))
socket.listen(5)
while 1:
    conn, addr  = socket.accept() # 接受客户端的连接请求
    data = conn.recv(1024)
    print('客户端发送的请求: \n', data)
    conn.send(b'HTTP/1.1 200 OK\r\n\r\n<h1>Hello World</h1>')
    conn.close()



