// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var matrix_pb = require('./matrix_pb.js');
var con_port_pb = require('./con_port_pb.js');
var cpu_port_pb = require('./cpu_port_pb.js');
var default_state_pb = require('./default_state_pb.js');
var default_state_video_connection_pb = require('./default_state_video_connection_pb.js');
var default_state_kwm_connection_pb = require('./default_state_kwm_connection_pb.js');
var diagram_pb = require('./diagram_pb.js');
var diagram_screen_pb = require('./diagram_screen_pb.js');
var diagram_screen_cpu_port_pb = require('./diagram_screen_cpu_port_pb.js');

function serialize_AddCpuToDiagramScreenRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.AddCpuToDiagramScreenRequest)) {
    throw new Error('Expected argument of type AddCpuToDiagramScreenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AddCpuToDiagramScreenRequest(buffer_arg) {
  return diagram_screen_pb.AddCpuToDiagramScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AddCpuToDiagramScreenResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.AddCpuToDiagramScreenResponse)) {
    throw new Error('Expected argument of type AddCpuToDiagramScreenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AddCpuToDiagramScreenResponse(buffer_arg) {
  return diagram_screen_pb.AddCpuToDiagramScreenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ConPort(arg) {
  if (!(arg instanceof con_port_pb.ConPort)) {
    throw new Error('Expected argument of type ConPort');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ConPort(buffer_arg) {
  return con_port_pb.ConPort.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ConnectMatrixRequest(arg) {
  if (!(arg instanceof matrix_pb.ConnectMatrixRequest)) {
    throw new Error('Expected argument of type ConnectMatrixRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ConnectMatrixRequest(buffer_arg) {
  return matrix_pb.ConnectMatrixRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ConnectMatrixResponse(arg) {
  if (!(arg instanceof matrix_pb.ConnectMatrixResponse)) {
    throw new Error('Expected argument of type ConnectMatrixResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ConnectMatrixResponse(buffer_arg) {
  return matrix_pb.ConnectMatrixResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CpuPort(arg) {
  if (!(arg instanceof cpu_port_pb.CpuPort)) {
    throw new Error('Expected argument of type CpuPort');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CpuPort(buffer_arg) {
  return cpu_port_pb.CpuPort.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.CreateDefaultStateRequest)) {
    throw new Error('Expected argument of type CreateDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CreateDefaultStateRequest(buffer_arg) {
  return default_state_pb.CreateDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.CreateDefaultStateResponse)) {
    throw new Error('Expected argument of type CreateDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CreateDefaultStateResponse(buffer_arg) {
  return default_state_pb.CreateDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateDiagramRequest(arg) {
  if (!(arg instanceof diagram_pb.CreateDiagramRequest)) {
    throw new Error('Expected argument of type CreateDiagramRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CreateDiagramRequest(buffer_arg) {
  return diagram_pb.CreateDiagramRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateDiagramResponse(arg) {
  if (!(arg instanceof diagram_pb.CreateDiagramResponse)) {
    throw new Error('Expected argument of type CreateDiagramResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CreateDiagramResponse(buffer_arg) {
  return diagram_pb.CreateDiagramResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateDiagramScreenRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.CreateDiagramScreenRequest)) {
    throw new Error('Expected argument of type CreateDiagramScreenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CreateDiagramScreenRequest(buffer_arg) {
  return diagram_screen_pb.CreateDiagramScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateDiagramScreenResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.CreateDiagramScreenResponse)) {
    throw new Error('Expected argument of type CreateDiagramScreenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CreateDiagramScreenResponse(buffer_arg) {
  return diagram_screen_pb.CreateDiagramScreenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DefaultState(arg) {
  if (!(arg instanceof default_state_pb.DefaultState)) {
    throw new Error('Expected argument of type DefaultState');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_DefaultState(buffer_arg) {
  return default_state_pb.DefaultState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Diagram(arg) {
  if (!(arg instanceof diagram_pb.Diagram)) {
    throw new Error('Expected argument of type Diagram');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Diagram(buffer_arg) {
  return diagram_pb.Diagram.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DiagramScreen(arg) {
  if (!(arg instanceof diagram_screen_pb.DiagramScreen)) {
    throw new Error('Expected argument of type DiagramScreen');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_DiagramScreen(buffer_arg) {
  return diagram_screen_pb.DiagramScreen.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EditConPortRequest(arg) {
  if (!(arg instanceof con_port_pb.EditConPortRequest)) {
    throw new Error('Expected argument of type EditConPortRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EditConPortRequest(buffer_arg) {
  return con_port_pb.EditConPortRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EditConPortResponse(arg) {
  if (!(arg instanceof con_port_pb.EditConPortResponse)) {
    throw new Error('Expected argument of type EditConPortResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EditConPortResponse(buffer_arg) {
  return con_port_pb.EditConPortResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EditCpuPortRequest(arg) {
  if (!(arg instanceof cpu_port_pb.EditCpuPortRequest)) {
    throw new Error('Expected argument of type EditCpuPortRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EditCpuPortRequest(buffer_arg) {
  return cpu_port_pb.EditCpuPortRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EditCpuPortResponse(arg) {
  if (!(arg instanceof cpu_port_pb.EditCpuPortResponse)) {
    throw new Error('Expected argument of type EditCpuPortResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EditCpuPortResponse(buffer_arg) {
  return cpu_port_pb.EditCpuPortResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EditDiagramRequest(arg) {
  if (!(arg instanceof diagram_pb.EditDiagramRequest)) {
    throw new Error('Expected argument of type EditDiagramRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EditDiagramRequest(buffer_arg) {
  return diagram_pb.EditDiagramRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EditDiagramResponse(arg) {
  if (!(arg instanceof diagram_pb.EditDiagramResponse)) {
    throw new Error('Expected argument of type EditDiagramResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EditDiagramResponse(buffer_arg) {
  return diagram_pb.EditDiagramResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EditDiagramScreenRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.EditDiagramScreenRequest)) {
    throw new Error('Expected argument of type EditDiagramScreenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EditDiagramScreenRequest(buffer_arg) {
  return diagram_screen_pb.EditDiagramScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EditDiagramScreenResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.EditDiagramScreenResponse)) {
    throw new Error('Expected argument of type EditDiagramScreenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EditDiagramScreenResponse(buffer_arg) {
  return diagram_screen_pb.EditDiagramScreenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EditMatrixRequest(arg) {
  if (!(arg instanceof matrix_pb.EditMatrixRequest)) {
    throw new Error('Expected argument of type EditMatrixRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EditMatrixRequest(buffer_arg) {
  return matrix_pb.EditMatrixRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EditMatrixResponse(arg) {
  if (!(arg instanceof matrix_pb.EditMatrixResponse)) {
    throw new Error('Expected argument of type EditMatrixResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EditMatrixResponse(buffer_arg) {
  return matrix_pb.EditMatrixResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ExecuteDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.ExecuteDefaultStateRequest)) {
    throw new Error('Expected argument of type ExecuteDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ExecuteDefaultStateRequest(buffer_arg) {
  return default_state_pb.ExecuteDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ExecuteDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.ExecuteDefaultStateResponse)) {
    throw new Error('Expected argument of type ExecuteDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ExecuteDefaultStateResponse(buffer_arg) {
  return default_state_pb.ExecuteDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchConPortsByMatrixIdRequest(arg) {
  if (!(arg instanceof matrix_pb.FetchConPortsByMatrixIdRequest)) {
    throw new Error('Expected argument of type FetchConPortsByMatrixIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchConPortsByMatrixIdRequest(buffer_arg) {
  return matrix_pb.FetchConPortsByMatrixIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchCpuPortsByMatrixIdRequest(arg) {
  if (!(arg instanceof matrix_pb.FetchCpuPortsByMatrixIdRequest)) {
    throw new Error('Expected argument of type FetchCpuPortsByMatrixIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchCpuPortsByMatrixIdRequest(buffer_arg) {
  return matrix_pb.FetchCpuPortsByMatrixIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDefaultStateByIdRequest(arg) {
  if (!(arg instanceof default_state_pb.FetchDefaultStateByIdRequest)) {
    throw new Error('Expected argument of type FetchDefaultStateByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDefaultStateByIdRequest(buffer_arg) {
  return default_state_pb.FetchDefaultStateByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDefaultStateByIdResponse(arg) {
  if (!(arg instanceof default_state_pb.FetchDefaultStateByIdResponse)) {
    throw new Error('Expected argument of type FetchDefaultStateByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDefaultStateByIdResponse(buffer_arg) {
  return default_state_pb.FetchDefaultStateByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDefaultStateBySlugRequest(arg) {
  if (!(arg instanceof default_state_pb.FetchDefaultStateBySlugRequest)) {
    throw new Error('Expected argument of type FetchDefaultStateBySlugRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDefaultStateBySlugRequest(buffer_arg) {
  return default_state_pb.FetchDefaultStateBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDefaultStateBySlugResponse(arg) {
  if (!(arg instanceof default_state_pb.FetchDefaultStateBySlugResponse)) {
    throw new Error('Expected argument of type FetchDefaultStateBySlugResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDefaultStateBySlugResponse(buffer_arg) {
  return default_state_pb.FetchDefaultStateBySlugResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDefaultStatesRequest(arg) {
  if (!(arg instanceof default_state_pb.FetchDefaultStatesRequest)) {
    throw new Error('Expected argument of type FetchDefaultStatesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDefaultStatesRequest(buffer_arg) {
  return default_state_pb.FetchDefaultStatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDiagramByIdRequest(arg) {
  if (!(arg instanceof diagram_pb.FetchDiagramByIdRequest)) {
    throw new Error('Expected argument of type FetchDiagramByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDiagramByIdRequest(buffer_arg) {
  return diagram_pb.FetchDiagramByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDiagramByIdResponse(arg) {
  if (!(arg instanceof diagram_pb.FetchDiagramByIdResponse)) {
    throw new Error('Expected argument of type FetchDiagramByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDiagramByIdResponse(buffer_arg) {
  return diagram_pb.FetchDiagramByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDiagramBySlugRequest(arg) {
  if (!(arg instanceof diagram_pb.FetchDiagramBySlugRequest)) {
    throw new Error('Expected argument of type FetchDiagramBySlugRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDiagramBySlugRequest(buffer_arg) {
  return diagram_pb.FetchDiagramBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDiagramBySlugResponse(arg) {
  if (!(arg instanceof diagram_pb.FetchDiagramBySlugResponse)) {
    throw new Error('Expected argument of type FetchDiagramBySlugResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDiagramBySlugResponse(buffer_arg) {
  return diagram_pb.FetchDiagramBySlugResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDiagramScreenByIdRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.FetchDiagramScreenByIdRequest)) {
    throw new Error('Expected argument of type FetchDiagramScreenByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDiagramScreenByIdRequest(buffer_arg) {
  return diagram_screen_pb.FetchDiagramScreenByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDiagramScreenByIdResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.FetchDiagramScreenByIdResponse)) {
    throw new Error('Expected argument of type FetchDiagramScreenByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDiagramScreenByIdResponse(buffer_arg) {
  return diagram_screen_pb.FetchDiagramScreenByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDiagramScreenBySlugRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.FetchDiagramScreenBySlugRequest)) {
    throw new Error('Expected argument of type FetchDiagramScreenBySlugRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDiagramScreenBySlugRequest(buffer_arg) {
  return diagram_screen_pb.FetchDiagramScreenBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDiagramScreenBySlugResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.FetchDiagramScreenBySlugResponse)) {
    throw new Error('Expected argument of type FetchDiagramScreenBySlugResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDiagramScreenBySlugResponse(buffer_arg) {
  return diagram_screen_pb.FetchDiagramScreenBySlugResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDiagramScreensRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.FetchDiagramScreensRequest)) {
    throw new Error('Expected argument of type FetchDiagramScreensRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDiagramScreensRequest(buffer_arg) {
  return diagram_screen_pb.FetchDiagramScreensRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchDiagramsRequest(arg) {
  if (!(arg instanceof diagram_pb.FetchDiagramsRequest)) {
    throw new Error('Expected argument of type FetchDiagramsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchDiagramsRequest(buffer_arg) {
  return diagram_pb.FetchDiagramsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchMatrixByIdRequest(arg) {
  if (!(arg instanceof matrix_pb.FetchMatrixByIdRequest)) {
    throw new Error('Expected argument of type FetchMatrixByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchMatrixByIdRequest(buffer_arg) {
  return matrix_pb.FetchMatrixByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchMatrixByIdResponse(arg) {
  if (!(arg instanceof matrix_pb.FetchMatrixByIdResponse)) {
    throw new Error('Expected argument of type FetchMatrixByIdResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchMatrixByIdResponse(buffer_arg) {
  return matrix_pb.FetchMatrixByIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchMatrixBySlugRequest(arg) {
  if (!(arg instanceof matrix_pb.FetchMatrixBySlugRequest)) {
    throw new Error('Expected argument of type FetchMatrixBySlugRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchMatrixBySlugRequest(buffer_arg) {
  return matrix_pb.FetchMatrixBySlugRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchMatrixBySlugResponse(arg) {
  if (!(arg instanceof matrix_pb.FetchMatrixBySlugResponse)) {
    throw new Error('Expected argument of type FetchMatrixBySlugResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchMatrixBySlugResponse(buffer_arg) {
  return matrix_pb.FetchMatrixBySlugResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FetchMatrixsRequest(arg) {
  if (!(arg instanceof matrix_pb.FetchMatrixsRequest)) {
    throw new Error('Expected argument of type FetchMatrixsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_FetchMatrixsRequest(buffer_arg) {
  return matrix_pb.FetchMatrixsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_InsertKvmConnectionToDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.InsertKvmConnectionToDefaultStateRequest)) {
    throw new Error('Expected argument of type InsertKvmConnectionToDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_InsertKvmConnectionToDefaultStateRequest(buffer_arg) {
  return default_state_pb.InsertKvmConnectionToDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_InsertKvmConnectionToDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.InsertKvmConnectionToDefaultStateResponse)) {
    throw new Error('Expected argument of type InsertKvmConnectionToDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_InsertKvmConnectionToDefaultStateResponse(buffer_arg) {
  return default_state_pb.InsertKvmConnectionToDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_InsertVideoConnectionToDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.InsertVideoConnectionToDefaultStateRequest)) {
    throw new Error('Expected argument of type InsertVideoConnectionToDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_InsertVideoConnectionToDefaultStateRequest(buffer_arg) {
  return default_state_pb.InsertVideoConnectionToDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_InsertVideoConnectionToDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.InsertVideoConnectionToDefaultStateResponse)) {
    throw new Error('Expected argument of type InsertVideoConnectionToDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_InsertVideoConnectionToDefaultStateResponse(buffer_arg) {
  return default_state_pb.InsertVideoConnectionToDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Matrix(arg) {
  if (!(arg instanceof matrix_pb.Matrix)) {
    throw new Error('Expected argument of type Matrix');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Matrix(buffer_arg) {
  return matrix_pb.Matrix.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveCpuFromDiagramScreenRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.RemoveCpuFromDiagramScreenRequest)) {
    throw new Error('Expected argument of type RemoveCpuFromDiagramScreenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveCpuFromDiagramScreenRequest(buffer_arg) {
  return diagram_screen_pb.RemoveCpuFromDiagramScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveCpuFromDiagramScreenResponse(arg) {
  if (!(arg instanceof diagram_screen_pb.RemoveCpuFromDiagramScreenResponse)) {
    throw new Error('Expected argument of type RemoveCpuFromDiagramScreenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveCpuFromDiagramScreenResponse(buffer_arg) {
  return diagram_screen_pb.RemoveCpuFromDiagramScreenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.RemoveDefaultStateRequest)) {
    throw new Error('Expected argument of type RemoveDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveDefaultStateRequest(buffer_arg) {
  return default_state_pb.RemoveDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.RemoveDefaultStateResponse)) {
    throw new Error('Expected argument of type RemoveDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveDefaultStateResponse(buffer_arg) {
  return default_state_pb.RemoveDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveDiagramRequest(arg) {
  if (!(arg instanceof diagram_pb.RemoveDiagramRequest)) {
    throw new Error('Expected argument of type RemoveDiagramRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveDiagramRequest(buffer_arg) {
  return diagram_pb.RemoveDiagramRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveDiagramResponse(arg) {
  if (!(arg instanceof diagram_pb.RemoveDiagramResponse)) {
    throw new Error('Expected argument of type RemoveDiagramResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveDiagramResponse(buffer_arg) {
  return diagram_pb.RemoveDiagramResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveDiagramScreenRequest(arg) {
  if (!(arg instanceof diagram_screen_pb.RemoveDiagramScreenRequest)) {
    throw new Error('Expected argument of type RemoveDiagramScreenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveDiagramScreenRequest(buffer_arg) {
  return diagram_screen_pb.RemoveDiagramScreenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveDiagramScreenResonse(arg) {
  if (!(arg instanceof diagram_screen_pb.RemoveDiagramScreenResonse)) {
    throw new Error('Expected argument of type RemoveDiagramScreenResonse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveDiagramScreenResonse(buffer_arg) {
  return diagram_screen_pb.RemoveDiagramScreenResonse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveKvmConnectionFromDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.RemoveKvmConnectionFromDefaultStateRequest)) {
    throw new Error('Expected argument of type RemoveKvmConnectionFromDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveKvmConnectionFromDefaultStateRequest(buffer_arg) {
  return default_state_pb.RemoveKvmConnectionFromDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveKvmConnectionFromDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.RemoveKvmConnectionFromDefaultStateResponse)) {
    throw new Error('Expected argument of type RemoveKvmConnectionFromDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveKvmConnectionFromDefaultStateResponse(buffer_arg) {
  return default_state_pb.RemoveKvmConnectionFromDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveMatrixRequest(arg) {
  if (!(arg instanceof matrix_pb.RemoveMatrixRequest)) {
    throw new Error('Expected argument of type RemoveMatrixRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveMatrixRequest(buffer_arg) {
  return matrix_pb.RemoveMatrixRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveMatrixResponse(arg) {
  if (!(arg instanceof matrix_pb.RemoveMatrixResponse)) {
    throw new Error('Expected argument of type RemoveMatrixResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveMatrixResponse(buffer_arg) {
  return matrix_pb.RemoveMatrixResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveVideoConnectionFromDefaultStateRequest(arg) {
  if (!(arg instanceof default_state_pb.RemoveVideoConnectionFromDefaultStateRequest)) {
    throw new Error('Expected argument of type RemoveVideoConnectionFromDefaultStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveVideoConnectionFromDefaultStateRequest(buffer_arg) {
  return default_state_pb.RemoveVideoConnectionFromDefaultStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveVideoConnectionFromDefaultStateResponse(arg) {
  if (!(arg instanceof default_state_pb.RemoveVideoConnectionFromDefaultStateResponse)) {
    throw new Error('Expected argument of type RemoveVideoConnectionFromDefaultStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RemoveVideoConnectionFromDefaultStateResponse(buffer_arg) {
  return default_state_pb.RemoveVideoConnectionFromDefaultStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MattiService = exports.MattiService = {
  // Matrixs queries
  fetchMatrixs: {
    path: '/MattiService.Matti/fetchMatrixs',
    requestStream: false,
    responseStream: true,
    requestType: matrix_pb.FetchMatrixsRequest,
    responseType: matrix_pb.Matrix,
    requestSerialize: serialize_FetchMatrixsRequest,
    requestDeserialize: deserialize_FetchMatrixsRequest,
    responseSerialize: serialize_Matrix,
    responseDeserialize: deserialize_Matrix,
  },
  fetchMatrixById: {
    path: '/MattiService.Matti/fetchMatrixById',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.FetchMatrixByIdRequest,
    responseType: matrix_pb.FetchMatrixByIdResponse,
    requestSerialize: serialize_FetchMatrixByIdRequest,
    requestDeserialize: deserialize_FetchMatrixByIdRequest,
    responseSerialize: serialize_FetchMatrixByIdResponse,
    responseDeserialize: deserialize_FetchMatrixByIdResponse,
  },
  fetchMatrixBySlug: {
    path: '/MattiService.Matti/fetchMatrixBySlug',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.FetchMatrixBySlugRequest,
    responseType: matrix_pb.FetchMatrixBySlugResponse,
    requestSerialize: serialize_FetchMatrixBySlugRequest,
    requestDeserialize: deserialize_FetchMatrixBySlugRequest,
    responseSerialize: serialize_FetchMatrixBySlugResponse,
    responseDeserialize: deserialize_FetchMatrixBySlugResponse,
  },
  fetchConPortsByMatrixId: {
    path: '/MattiService.Matti/fetchConPortsByMatrixId',
    requestStream: false,
    responseStream: true,
    requestType: matrix_pb.FetchConPortsByMatrixIdRequest,
    responseType: con_port_pb.ConPort,
    requestSerialize: serialize_FetchConPortsByMatrixIdRequest,
    requestDeserialize: deserialize_FetchConPortsByMatrixIdRequest,
    responseSerialize: serialize_ConPort,
    responseDeserialize: deserialize_ConPort,
  },
  fetchCpuPortsByMatrixId: {
    path: '/MattiService.Matti/fetchCpuPortsByMatrixId',
    requestStream: false,
    responseStream: true,
    requestType: matrix_pb.FetchCpuPortsByMatrixIdRequest,
    responseType: cpu_port_pb.CpuPort,
    requestSerialize: serialize_FetchCpuPortsByMatrixIdRequest,
    requestDeserialize: deserialize_FetchCpuPortsByMatrixIdRequest,
    responseSerialize: serialize_CpuPort,
    responseDeserialize: deserialize_CpuPort,
  },
  // Matrix mutations
  connectMatrix: {
    path: '/MattiService.Matti/connectMatrix',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.ConnectMatrixRequest,
    responseType: matrix_pb.ConnectMatrixResponse,
    requestSerialize: serialize_ConnectMatrixRequest,
    requestDeserialize: deserialize_ConnectMatrixRequest,
    responseSerialize: serialize_ConnectMatrixResponse,
    responseDeserialize: deserialize_ConnectMatrixResponse,
  },
  editMatrix: {
    path: '/MattiService.Matti/editMatrix',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.EditMatrixRequest,
    responseType: matrix_pb.EditMatrixResponse,
    requestSerialize: serialize_EditMatrixRequest,
    requestDeserialize: deserialize_EditMatrixRequest,
    responseSerialize: serialize_EditMatrixResponse,
    responseDeserialize: deserialize_EditMatrixResponse,
  },
  removeMatrix: {
    path: '/MattiService.Matti/removeMatrix',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.RemoveMatrixRequest,
    responseType: matrix_pb.RemoveMatrixResponse,
    requestSerialize: serialize_RemoveMatrixRequest,
    requestDeserialize: deserialize_RemoveMatrixRequest,
    responseSerialize: serialize_RemoveMatrixResponse,
    responseDeserialize: deserialize_RemoveMatrixResponse,
  },
  editConPort: {
    path: '/MattiService.Matti/editConPort',
    requestStream: false,
    responseStream: false,
    requestType: con_port_pb.EditConPortRequest,
    responseType: con_port_pb.EditConPortResponse,
    requestSerialize: serialize_EditConPortRequest,
    requestDeserialize: deserialize_EditConPortRequest,
    responseSerialize: serialize_EditConPortResponse,
    responseDeserialize: deserialize_EditConPortResponse,
  },
  editCpuPort: {
    path: '/MattiService.Matti/editCpuPort',
    requestStream: false,
    responseStream: false,
    requestType: cpu_port_pb.EditCpuPortRequest,
    responseType: cpu_port_pb.EditCpuPortResponse,
    requestSerialize: serialize_EditCpuPortRequest,
    requestDeserialize: deserialize_EditCpuPortRequest,
    responseSerialize: serialize_EditCpuPortResponse,
    responseDeserialize: deserialize_EditCpuPortResponse,
  },
  // Defaulstate queries
  fetchDefaultStates: {
    path: '/MattiService.Matti/fetchDefaultStates',
    requestStream: false,
    responseStream: true,
    requestType: default_state_pb.FetchDefaultStatesRequest,
    responseType: default_state_pb.DefaultState,
    requestSerialize: serialize_FetchDefaultStatesRequest,
    requestDeserialize: deserialize_FetchDefaultStatesRequest,
    responseSerialize: serialize_DefaultState,
    responseDeserialize: deserialize_DefaultState,
  },
  fetchDefaultStateById: {
    path: '/MattiService.Matti/fetchDefaultStateById',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.FetchDefaultStateByIdRequest,
    responseType: default_state_pb.FetchDefaultStateByIdResponse,
    requestSerialize: serialize_FetchDefaultStateByIdRequest,
    requestDeserialize: deserialize_FetchDefaultStateByIdRequest,
    responseSerialize: serialize_FetchDefaultStateByIdResponse,
    responseDeserialize: deserialize_FetchDefaultStateByIdResponse,
  },
  fetchDefaultStateBySlug: {
    path: '/MattiService.Matti/fetchDefaultStateBySlug',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.FetchDefaultStateBySlugRequest,
    responseType: default_state_pb.FetchDefaultStateBySlugResponse,
    requestSerialize: serialize_FetchDefaultStateBySlugRequest,
    requestDeserialize: deserialize_FetchDefaultStateBySlugRequest,
    responseSerialize: serialize_FetchDefaultStateBySlugResponse,
    responseDeserialize: deserialize_FetchDefaultStateBySlugResponse,
  },
  // Defaultstate mutations
  createDefaultState: {
    path: '/MattiService.Matti/createDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.CreateDefaultStateRequest,
    responseType: default_state_pb.CreateDefaultStateResponse,
    requestSerialize: serialize_CreateDefaultStateRequest,
    requestDeserialize: deserialize_CreateDefaultStateRequest,
    responseSerialize: serialize_CreateDefaultStateResponse,
    responseDeserialize: deserialize_CreateDefaultStateResponse,
  },
  removeDefaultState: {
    path: '/MattiService.Matti/removeDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.RemoveDefaultStateRequest,
    responseType: default_state_pb.RemoveDefaultStateResponse,
    requestSerialize: serialize_RemoveDefaultStateRequest,
    requestDeserialize: deserialize_RemoveDefaultStateRequest,
    responseSerialize: serialize_RemoveDefaultStateResponse,
    responseDeserialize: deserialize_RemoveDefaultStateResponse,
  },
  insertVideoConnectionToDefaultState: {
    path: '/MattiService.Matti/insertVideoConnectionToDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.InsertVideoConnectionToDefaultStateRequest,
    responseType: default_state_pb.InsertVideoConnectionToDefaultStateResponse,
    requestSerialize: serialize_InsertVideoConnectionToDefaultStateRequest,
    requestDeserialize: deserialize_InsertVideoConnectionToDefaultStateRequest,
    responseSerialize: serialize_InsertVideoConnectionToDefaultStateResponse,
    responseDeserialize: deserialize_InsertVideoConnectionToDefaultStateResponse,
  },
  insertKvmConnectionToDefaultState: {
    path: '/MattiService.Matti/insertKvmConnectionToDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.InsertKvmConnectionToDefaultStateRequest,
    responseType: default_state_pb.InsertKvmConnectionToDefaultStateResponse,
    requestSerialize: serialize_InsertKvmConnectionToDefaultStateRequest,
    requestDeserialize: deserialize_InsertKvmConnectionToDefaultStateRequest,
    responseSerialize: serialize_InsertKvmConnectionToDefaultStateResponse,
    responseDeserialize: deserialize_InsertKvmConnectionToDefaultStateResponse,
  },
  removeVideoConnectionFromDefaultState: {
    path: '/MattiService.Matti/removeVideoConnectionFromDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.RemoveVideoConnectionFromDefaultStateRequest,
    responseType: default_state_pb.RemoveVideoConnectionFromDefaultStateResponse,
    requestSerialize: serialize_RemoveVideoConnectionFromDefaultStateRequest,
    requestDeserialize: deserialize_RemoveVideoConnectionFromDefaultStateRequest,
    responseSerialize: serialize_RemoveVideoConnectionFromDefaultStateResponse,
    responseDeserialize: deserialize_RemoveVideoConnectionFromDefaultStateResponse,
  },
  removeKvmConnectionFromDefaultState: {
    path: '/MattiService.Matti/removeKvmConnectionFromDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.RemoveKvmConnectionFromDefaultStateRequest,
    responseType: default_state_pb.RemoveKvmConnectionFromDefaultStateResponse,
    requestSerialize: serialize_RemoveKvmConnectionFromDefaultStateRequest,
    requestDeserialize: deserialize_RemoveKvmConnectionFromDefaultStateRequest,
    responseSerialize: serialize_RemoveKvmConnectionFromDefaultStateResponse,
    responseDeserialize: deserialize_RemoveKvmConnectionFromDefaultStateResponse,
  },
  executeDefaultState: {
    path: '/MattiService.Matti/executeDefaultState',
    requestStream: false,
    responseStream: false,
    requestType: default_state_pb.ExecuteDefaultStateRequest,
    responseType: default_state_pb.ExecuteDefaultStateResponse,
    requestSerialize: serialize_ExecuteDefaultStateRequest,
    requestDeserialize: deserialize_ExecuteDefaultStateRequest,
    responseSerialize: serialize_ExecuteDefaultStateResponse,
    responseDeserialize: deserialize_ExecuteDefaultStateResponse,
  },
  // Diagram queries
  fetchDiagrams: {
    path: '/MattiService.Matti/fetchDiagrams',
    requestStream: false,
    responseStream: true,
    requestType: diagram_pb.FetchDiagramsRequest,
    responseType: diagram_pb.Diagram,
    requestSerialize: serialize_FetchDiagramsRequest,
    requestDeserialize: deserialize_FetchDiagramsRequest,
    responseSerialize: serialize_Diagram,
    responseDeserialize: deserialize_Diagram,
  },
  fetchDiagramById: {
    path: '/MattiService.Matti/fetchDiagramById',
    requestStream: false,
    responseStream: false,
    requestType: diagram_pb.FetchDiagramByIdRequest,
    responseType: diagram_pb.FetchDiagramByIdResponse,
    requestSerialize: serialize_FetchDiagramByIdRequest,
    requestDeserialize: deserialize_FetchDiagramByIdRequest,
    responseSerialize: serialize_FetchDiagramByIdResponse,
    responseDeserialize: deserialize_FetchDiagramByIdResponse,
  },
  fetchDiagramBySlug: {
    path: '/MattiService.Matti/fetchDiagramBySlug',
    requestStream: false,
    responseStream: false,
    requestType: diagram_pb.FetchDiagramBySlugRequest,
    responseType: diagram_pb.FetchDiagramBySlugResponse,
    requestSerialize: serialize_FetchDiagramBySlugRequest,
    requestDeserialize: deserialize_FetchDiagramBySlugRequest,
    responseSerialize: serialize_FetchDiagramBySlugResponse,
    responseDeserialize: deserialize_FetchDiagramBySlugResponse,
  },
  // Diagram mutations
  createDiagram: {
    path: '/MattiService.Matti/createDiagram',
    requestStream: false,
    responseStream: false,
    requestType: diagram_pb.CreateDiagramRequest,
    responseType: diagram_pb.CreateDiagramResponse,
    requestSerialize: serialize_CreateDiagramRequest,
    requestDeserialize: deserialize_CreateDiagramRequest,
    responseSerialize: serialize_CreateDiagramResponse,
    responseDeserialize: deserialize_CreateDiagramResponse,
  },
  editDiagram: {
    path: '/MattiService.Matti/editDiagram',
    requestStream: false,
    responseStream: false,
    requestType: diagram_pb.EditDiagramRequest,
    responseType: diagram_pb.EditDiagramResponse,
    requestSerialize: serialize_EditDiagramRequest,
    requestDeserialize: deserialize_EditDiagramRequest,
    responseSerialize: serialize_EditDiagramResponse,
    responseDeserialize: deserialize_EditDiagramResponse,
  },
  removeDiagram: {
    path: '/MattiService.Matti/removeDiagram',
    requestStream: false,
    responseStream: false,
    requestType: diagram_pb.RemoveDiagramRequest,
    responseType: diagram_pb.RemoveDiagramResponse,
    requestSerialize: serialize_RemoveDiagramRequest,
    requestDeserialize: deserialize_RemoveDiagramRequest,
    responseSerialize: serialize_RemoveDiagramResponse,
    responseDeserialize: deserialize_RemoveDiagramResponse,
  },
  // DiagramScreen queries
  fetchDiagramScreens: {
    path: '/MattiService.Matti/fetchDiagramScreens',
    requestStream: false,
    responseStream: true,
    requestType: diagram_screen_pb.FetchDiagramScreensRequest,
    responseType: diagram_screen_pb.DiagramScreen,
    requestSerialize: serialize_FetchDiagramScreensRequest,
    requestDeserialize: deserialize_FetchDiagramScreensRequest,
    responseSerialize: serialize_DiagramScreen,
    responseDeserialize: deserialize_DiagramScreen,
  },
  fetchDiagramScreenById: {
    path: '/MattiService.Matti/fetchDiagramScreenById',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.FetchDiagramScreenByIdRequest,
    responseType: diagram_screen_pb.FetchDiagramScreenByIdResponse,
    requestSerialize: serialize_FetchDiagramScreenByIdRequest,
    requestDeserialize: deserialize_FetchDiagramScreenByIdRequest,
    responseSerialize: serialize_FetchDiagramScreenByIdResponse,
    responseDeserialize: deserialize_FetchDiagramScreenByIdResponse,
  },
  fetchDiagramScreenBySlug: {
    path: '/MattiService.Matti/fetchDiagramScreenBySlug',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.FetchDiagramScreenBySlugRequest,
    responseType: diagram_screen_pb.FetchDiagramScreenBySlugResponse,
    requestSerialize: serialize_FetchDiagramScreenBySlugRequest,
    requestDeserialize: deserialize_FetchDiagramScreenBySlugRequest,
    responseSerialize: serialize_FetchDiagramScreenBySlugResponse,
    responseDeserialize: deserialize_FetchDiagramScreenBySlugResponse,
  },
  // DiagramScreen mutations
  createDiagramScreen: {
    path: '/MattiService.Matti/createDiagramScreen',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.CreateDiagramScreenRequest,
    responseType: diagram_screen_pb.CreateDiagramScreenResponse,
    requestSerialize: serialize_CreateDiagramScreenRequest,
    requestDeserialize: deserialize_CreateDiagramScreenRequest,
    responseSerialize: serialize_CreateDiagramScreenResponse,
    responseDeserialize: deserialize_CreateDiagramScreenResponse,
  },
  removeDiagramScreen: {
    path: '/MattiService.Matti/removeDiagramScreen',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.RemoveDiagramScreenRequest,
    responseType: diagram_screen_pb.RemoveDiagramScreenResonse,
    requestSerialize: serialize_RemoveDiagramScreenRequest,
    requestDeserialize: deserialize_RemoveDiagramScreenRequest,
    responseSerialize: serialize_RemoveDiagramScreenResonse,
    responseDeserialize: deserialize_RemoveDiagramScreenResonse,
  },
  editDiagramScreen: {
    path: '/MattiService.Matti/editDiagramScreen',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.EditDiagramScreenRequest,
    responseType: diagram_screen_pb.EditDiagramScreenResponse,
    requestSerialize: serialize_EditDiagramScreenRequest,
    requestDeserialize: deserialize_EditDiagramScreenRequest,
    responseSerialize: serialize_EditDiagramScreenResponse,
    responseDeserialize: deserialize_EditDiagramScreenResponse,
  },
  addCpuToDiagramScreen: {
    path: '/MattiService.Matti/addCpuToDiagramScreen',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.AddCpuToDiagramScreenRequest,
    responseType: diagram_screen_pb.AddCpuToDiagramScreenResponse,
    requestSerialize: serialize_AddCpuToDiagramScreenRequest,
    requestDeserialize: deserialize_AddCpuToDiagramScreenRequest,
    responseSerialize: serialize_AddCpuToDiagramScreenResponse,
    responseDeserialize: deserialize_AddCpuToDiagramScreenResponse,
  },
  removeCpuFromDiagramScreen: {
    path: '/MattiService.Matti/removeCpuFromDiagramScreen',
    requestStream: false,
    responseStream: false,
    requestType: diagram_screen_pb.RemoveCpuFromDiagramScreenRequest,
    responseType: diagram_screen_pb.RemoveCpuFromDiagramScreenResponse,
    requestSerialize: serialize_RemoveCpuFromDiagramScreenRequest,
    requestDeserialize: deserialize_RemoveCpuFromDiagramScreenRequest,
    responseSerialize: serialize_RemoveCpuFromDiagramScreenResponse,
    responseDeserialize: deserialize_RemoveCpuFromDiagramScreenResponse,
  },
};

exports.MattiClient = grpc.makeGenericClientConstructor(MattiService);
