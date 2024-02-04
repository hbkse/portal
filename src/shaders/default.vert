// attribute vec4 aVertexPosition;

//uniform mat4 uModelViewMatrix;
//uniform mat4 uProjectionMatrix;

//void main() {
//    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
//}

#version 300 es
// vertex.glsl - from the OpenGL SuperBible Sixth Edition

void main(void)
{
    const vec4 vertices[3] = vec4[3](
        vec4(0.25, -0.25, 0.5, 1.0),
        vec4(-0.25, -0.25, 0.5, 1.0),
        vec4(0.25, 0.25, 0.5, 1.0)
    );

    gl_Position = vertices[gl_VertexID];
}